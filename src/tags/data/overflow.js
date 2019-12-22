import React from 'react'
import { MMLDataTag } from '../base'

export class Overflow extends MMLDataTag {
  toReact(rc) {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ...
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {this.childrenToReact(rc)}
        </div>
      </div>
    )
  }
}
