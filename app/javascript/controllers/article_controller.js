import { Controller } from "@hotwired/stimulus";
import markdownit from "markdown-it";

// Connects to data-controller="article"
export default class extends Controller {
  static targets = ["title", "body", "titlePreview", "bodyPreview"];

  preview() {
    const md = markdownit("commonmark", { html: true });
    this.titlePreviewTarget.innerText = this.titleTarget.value || "";
    this.bodyPreviewTarget.innerHTML = md.render(this.bodyTarget.value);
  }

  connect() {
    const md = markdownit("commonmark", { html: true });
    this.bodyPreviewTarget.innerHTML = md.render(this.bodyTarget.value);
  }
}
