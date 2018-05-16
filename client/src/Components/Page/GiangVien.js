import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableSinhVien from '../GiangVien/TableSinhVien';
import MyLecturer from '../GiangVien/MyLecturer';
import { Grid } from 'material-ui';
import { Button } from 'material-ui';
import { withStyles } from 'material-ui';
import MyLecturer2 from '../GiangVien/MyLecturer2';
import GiangVienCuaToi from '../GiangVien/GiangVienCuaToi';

const styles = theme => ({
  leftCenter: {
    display: 'flex',
    marginLeft: 'auto',
    alignItems: 'center'
  }
});

class GiangVienPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GiangVienCuaToi />
      </div>
    );
  }
}

GiangVienPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GiangVienPage);
