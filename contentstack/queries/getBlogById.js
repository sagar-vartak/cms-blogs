import Stack from "../stack";

export default function getEnteryById(entry_id) {
  const Query = Stack.ContentType("blog_shaaggy").Entry(entry_id);
  return Query.fetch()
    .then(
      function success(entry) {
        // console.log(entry.get("title")); // Retrieve field value by providing a field's uid
        //console.log(entry.toJSON()); // Convert the entry result object to JSON
        return entry.toJSON();
      },
      function error(err) {
        // err object
        console.log(err);
        return err;
      }
    )
    .then(function success(result) {
      return result;
    });
}
