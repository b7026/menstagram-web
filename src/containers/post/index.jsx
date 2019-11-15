import React, { Component } from 'react';
import { PostButton,} from "./styled";

export class Post extends Component {
  render() {
    return (
      <div>
        <div className="position-relative py-3 border-bottom mb-3">
          <div className="text-center">投稿</div>
          <PostButton type="button" className="btn btn-link">投稿する</PostButton>
        </div>
        <div className="mx-3">
          <textarea className="form-control mb-3" rows="4" placeholder="文章を記入してください"></textarea>
          <form action="cgi-bin/abc.cgi" method="post" enctype="multipart/form-data">
            <p>
            <input type="file" name="datafile"></input>
            </p>
          </form>
        </div>
      </div>
    )
  }
}