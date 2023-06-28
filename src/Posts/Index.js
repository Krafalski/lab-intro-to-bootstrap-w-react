import TableRows from "./TableRows.js";
import Post from "./Post.js";

function PostsIndex({ search, posts }) {
  const postElements = posts.filtered.map((post) => (
    <Post key={post.id} post={post} />
  ));
  const rows = TableRows(posts.all);
  return (
    <section className="container">
      <section className="row row-gap-4">
        <div className="col-lg-9">
          <div className="row row-cols-1 row-cols-lg-2 g-lg-3 g-2">
            {postElements}
          </div>
          {!posts.filtered.length && (
            <div className="alert alert-danger mt-4" role="alert">
              No posts found with the search term "{search}". Please try again.
            </div>
          )}
        </div>
        <div className="col-lg-3">
          <h3>
            Posts by <span className="text-warning">location</span>
          </h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th className="text-center" scope="col">
                  Posts
                </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

export default PostsIndex;
