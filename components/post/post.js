import React, { Component } from 'react'
import { Text, View } from 'react-native'
const baseUrl = 'https://prabeen-restapi.herokuapp.com/api/posts';

class Post extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount(){
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
    return (
      <View>
        <Text> Post Component </Text>
        <Text> Post Component </Text>
        {this.state.posts.map(post=>{
            console.log(post)
            return <Text>{ post.title} </Text>
        })}
      </View>
    )
  }
}

export default Post;