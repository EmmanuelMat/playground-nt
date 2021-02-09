import React from "react";

export default function TitleComponent({ title }) {
  return (
    <div>
      <li  class="list-group-item disabled" aria-disabled="true">
        {title}
      </li>
    </div>
  );
}
