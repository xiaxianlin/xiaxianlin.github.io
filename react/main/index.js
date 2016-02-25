var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment1"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment2"}
];

var Comment = React.createClass({
    rawMarkup: function(){
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup}
    },
    render: function(){
        return (
            <div className="comment">
                <h2 className="comment-author">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
            );
        });
        return (
            <div className="comment-list">{commentNodes}</div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="comment-form"> Hello, world! I am CommentForm.</div>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function(){
        return {data: []};
    },
    componentDidMount: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox url="http://localhost:8080/api/comments"/>,
    document.getElementById('container')
);