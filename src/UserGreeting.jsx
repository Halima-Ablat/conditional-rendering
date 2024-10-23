import PropTypes from "prop-types";

function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  ) : (
    <h2 className="login-message">Please log in to continue...</h2>
  );
}
UserGreeting.prototypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};
export default UserGreeting;
