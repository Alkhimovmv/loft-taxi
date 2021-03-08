import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Card } from '@material-ui/core';

const ProfileCard = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(
      e.target.card.value,
      e.target.surname.value,
      e.target.date.value,
      e.target.cvc.value,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Card>
          <TextField
            type="text"
            name="surname"
            placeholder="name surname"
            required
            label={<span>Имя владельца</span>}
          />
        </Card>
        <Card>
          <TextField
            type="text"
            name="card"
            placeholder="0000000000000000"
            required
            label={<span>Номер карты</span>}
          />
        </Card>
        <Card>
          <TextField
            type="text"
            name="date"
            placeholder="mm/yy"
            required
            label={<span>MM/YY</span>}
          />
          <TextField
            type="text"
            name="cvc"
            placeholder="cvc"
            required
            label={<span>CVC</span>}
          />
        </Card>
      </div>
      <Button type="submit" variant="contained" color="primary">Сохранить</Button>
    </form>
  );
};

ProfileCard.propTypes = {
  handleSubmit: PropTypes.func,
};

ProfileCard.defaultProps = {
  handleSubmit: () => {},
};

export default ProfileCard;