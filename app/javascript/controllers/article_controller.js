import { Controller } from "@hotwired/stimulus";
import markdownit from "markdown-it";

// Connects to data-controller="article"
export default class extends Controller {
  static targets = ["title", "body", "titlePreview", "bodyPreview"];

  preview() {
    console.log("fuck");
    this.titlePreviewTarget.innerText = this.titleTarget.value || "";
    this.bodyPreviewTarget.innerText = this.bodyTarget.value || "";
  }

  connect() {}
}
