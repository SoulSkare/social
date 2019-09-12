import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const styles = {
  card: {
    display: 'flex'
  }
};
export class Post extends Component {
  render() {
    const {
      classes,
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount
      }
    } = this.props;
    return (
      <Card>
        <CardMedia image={userImage} title="Profile image"></CardMedia>
        <CardContent>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt}
          </Typography>
          <Typography variant="body">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Post);
