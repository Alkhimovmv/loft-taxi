import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import { addCardAction } from './actions';

const Profile = (props) => {

  const handleSubmit = (number, name, date, cvc) => {
    props.addCard({
      number,
      name,
      date,
      cvc,
    });
  };


  return (
    <div >
      <Paper >
        <Typography variant="h4" color="inherit">Профиль</Typography>
        <Typography>
          Способ оплаты
        </Typography>
        {props.cardIsExist ? (
          <>
            <p>Платежные данные обновлены. Теперь вы можете заказывать такси.</p>
            <Button to="map" component={Link} >
              Перейти на карту
            </Button>
          </>
        ) : (
          <ProfileCard handleSubmit={handleSubmit} />
        )}
      </Paper>
    </div>
  );
};

Profile.propTypes = {
  addCard: PropTypes.func,
  cardIsExist: PropTypes.bool,
};

Profile.defaultProps = {
  addCard: () => {},
  cardIsExist: false,
};

const mapStateToProps = (state) => ({
  cardIsExist: state.card.cardIsExist,
});

const mapDispathToProps = (dispatch) => ({
  addCard: (card) => dispatch(addCardAction(card)),
});


export const ProfileWithAuth = connect(mapStateToProps, mapDispathToProps)(Profile);
