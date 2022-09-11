import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        alt=''
        src={avatar_url}
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          target='_blank'
          rel='noreferrer'
          className='btn btn-dark btn-sm my-1'
        >
          more
        </a>
      </div>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object,
  // user: PropTypes.exact({
  //   id: PropTypes.number.isRequired,
  //   login: PropTypes.string.isRequired,
  //   avatar_url: PropTypes.string.isRequired,
  //   html_url: PropTypes.string.isRequired,
  // }),
};

export default UserItem;
