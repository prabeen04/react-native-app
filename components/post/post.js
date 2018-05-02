import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
const baseUrl = 'https://prabeen-restapi.herokuapp.com/api/posts';

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    posts: data
                })
            })
    }
    render() {
        if (this.state.posts.length === 0) {
            return (<View><Text>Loading...</Text></View>);
        }
        return (
            <View>
                <ListItem
                        title={'post.title'}
                        subtitle={'post.author'}
                    />
                {this.state.posts.map(post => (
                    <ListItem
                        key={post._id}
                        title={post.title}
                    />
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    postWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexGrow: 1
    },
    postCard: {
        display: 'flex',
        backgroundColor: '#eee',
        padding: 8,
        margin: 2,
        borderColor: '#aaa'
    },
    postList: {
        color: '#444',
        fontSize: 25
    }
})
export default Post;