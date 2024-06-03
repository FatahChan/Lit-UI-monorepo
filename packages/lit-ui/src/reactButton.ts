"use client";
import { createComponent } from "@lit/react";
import React from "react";
import { LitButton } from "./button";

export const ReactButton = createComponent({
  tagName: "lit-button",
  elementClass: LitButton,
  react: React,
});
