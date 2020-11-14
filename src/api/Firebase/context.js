import React from "react";

const FirebaseContext = React.createContext(null);
FirebaseContext.displayName = "FirebaseContext";

export const withFirebase = (Component) => (props) => (
  // *** Implement Logic ***
);

export default FirebaseContext;