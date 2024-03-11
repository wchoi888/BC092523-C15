// Importing useRouteError hook from react-router-dom
import { useRouteError } from "react-router-dom";
// Functional component for ErrorPage
export default function ErrorPage() {
  // Using the useRouteError hook to get error information
  const error = useRouteError();
  console.error(error);

  return (
    // Div for the ErrorPage content with an id for styling
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
