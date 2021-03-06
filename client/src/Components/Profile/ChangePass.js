import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import { TextField, Button, Grid, Avatar } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
    width: 100 + '%',
  }),
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class ChangePassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      newPass: "",
      repeatPass: "",
    }
    this.update = this.update.bind(this);
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  update() {
    if (this.state.newPass != this.state.repeatPass) {
      alert("repeat password does not match");
      return;
    }
    var formData = new FormData();
    formData.append("password", this.state.password);
    formData.append("newPassword", this.state.newPass);
    return fetch('http://qltt.vn/api/student/' + localStorage.getItem("id") + '/my_account', {
      method: 'POST',
      headers: {
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson.success ? "success" : responseJson.err);
        if(responseJson.success) {
            localStorage.setItem("lastLogin", 0);
            this.props.rerenderCallback();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 + '%' }}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            Đổi mật khẩu của bạn
        </Typography>
          <form style={{ marginBottom: 20 + 'px' }}>
            <TextField
              id="password"
              label="Nhập mật khẩu hiện tại của bạn"
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="newPass"
              label="Nhập mật khẩu mới"
              type="password"
              value={this.state.newPass}
              onChange={this.handleChange('newPass')}
              margin="normal"
              fullWidth
            />
            <TextField
              id="repeatPass"
              label="Nhập lại mật khẩu mới"
              type="password"
              value={this.state.repeatPass}
              onChange={this.handleChange('repeatPass')}
              margin="normal"
              fullWidth
            />
          </form>
          <Button variant="raised" color="primary" className={classes.button} onClick={this.update}>
            Đổi mật khẩu
          </Button>

        </Paper>
      </div>
    );
  }
}

ChangePassForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangePassForm);
