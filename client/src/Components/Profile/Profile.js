import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { TextField, Button, Grid, Avatar } from 'material-ui';
import red from 'material-ui/colors/red';

import ContactInfoForm from './ContactInfo';
import GeneralInfoForm from './GeneralInfo';
import SkillInfoForm from './SkillInfo';
import HobbiesInfoForm from './HobbiesInfo';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 40 + 'px',
  }),
});

class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tab: this.props.match.params.tab ? parseInt(this.props.match.params.tab) : 0,
    }
  }
  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };
  componentWillReceiveProps(nextProps) {
    nextProps.match.params.tab ? this.setState({ tab: parseInt(nextProps.match.params.tab) }) : 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <div style={{ display: 'flex', padding: '16px', alignItems: 'center' }}>
            <div style={{ marginRight: '16px' }}>
              <Avatar style={{ backgroundColor: red[500], width: '80px', height: '80px' }}>
                P
              </Avatar>
            </div>
            <div style={{ flex: '1' }}>
              <Typography variant="display1" style={{ fontWeight: 'bold' }}>Phạm Ngọc Duy</Typography>
              <Typography>16020925@vnu.edu.vn</Typography>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Link to="/profile/changepass">
                <Button variant="raised" className={classes.button}>
                  Đổi mật khẩu tài khoản
                      </Button>
              </Link>
            </div>
          </div>
          <div>
            <Tabs
              value={this.state.tab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Link to="/profile/tab-0">
                <Tab label="Thông tin chung" />
              </Link>
              <Link to="/profile/tab-1">
                <Tab label="Liên hệ" />
              </Link>
              <Link to="/profile/tab-2">
                <Tab label="Kỹ năng" />
              </Link>
              <Link to="/profile/tab-3">
                <Tab label="Sở thích" />
              </Link>
            </Tabs>
          </div>
        </div>
        <div>
          {
            this.state.tab === 0 && (
              <GeneralInfoForm />
            )
          }
          {
            this.state.tab === 1 && (
              <ContactInfoForm />
            )
          }
          {
            this.state.tab === 2 && (
              <SkillInfoForm />
            )
          }
          {
            this.state.tab === 3 && (
              <HobbiesInfoForm />
            )
          }
        </div>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);
