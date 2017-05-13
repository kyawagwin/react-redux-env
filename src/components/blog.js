import React from 'react';

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
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Title:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              <input
                type="text"
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Content:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              <input
                type="text"
                value={this.state.content}
                onChange={e => this.setState({ content: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
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