import React from 'react';
import { Input, Button, Form, Divider } from 'semantic-ui-react';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    this.props.onGetBlog();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddBlog(this.state);
  }

  render() {
    const blogs  = this.props.blog.blogs;

    return (
      <div>
        <Form>
          <Form.Field>
            <label>Title</label>
            <Input
              type="text"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
          />
          </Form.Field>
          <Form.Field>
            <label>Content</label>
            <Input
              type="text"
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Button onClick={ this.onSubmit }>Submit</Button>
          </Form.Field>
        </Form>
        <Divider />
        {
          blogs && blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <div key={ blog.id } className="row">
                  <h3>{ blog.title }</h3>
                  <p>{ blog.content }</p>
                </div>
              );
            })
          ) : null
        }
      </div>
    );
  }
}