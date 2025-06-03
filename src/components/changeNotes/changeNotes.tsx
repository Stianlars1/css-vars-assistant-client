"use client";

import React, { useMemo } from "react";
import parse, {
  domToReact,
  Element as DomElement,
  DOMNode,
  HTMLReactParserOptions,
} from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

import {
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Text,
  Code,
  Blockquote,
  List,
  ListItem,
} from "@/components/typography/Typography";

interface Props {
  html: string;
}

function isElement(node: DOMNode): node is DomElement {
  return (node as DomElement).type === "tag";
}

export function ChangeNotes({ html }: Props) {
  const clean = useMemo(
    () => DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }),
    [html],
  );

  const options: HTMLReactParserOptions = {
    replace(node) {
      if (!isElement(node)) return;

      const children = domToReact(node.children as DOMNode[], options);

      switch (node.name) {
        case "h2":
          return <Heading2>{children}</Heading2>;
        case "h3":
          return <Heading3>{children}</Heading3>;
        case "h4":
          return <Heading4>{children}</Heading4>;
        case "p":
          return <Paragraph>{children}</Paragraph>;
        case "strong":
          return (
            <Text as="span" weight="semibold">
              {children}
            </Text>
          );
        case "em":
          return (
            <Text as="span" variant="muted">
              {children}
            </Text>
          );
        case "code":
          return <Code>{children}</Code>;
        case "blockquote":
          return <Blockquote>{children}</Blockquote>;
        case "ul":
          return <List as={"ul"}>{children}</List>;
        case "ol":
          return <List as={"ol"}>{children}</List>;
        case "li":
          return <ListItem>{children}</ListItem>;
        default:
          return undefined; // leave unknown tags untouched
      }
    },
  };

  return <>{parse(clean, options)}</>;
}
