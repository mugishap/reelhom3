import React, { useContext, useEffect, useState } from "react";
import { getCookie } from "./RequireAuth";

const PostContext = React.createContext();

export const usePosts = () => {
	return useContext(PostContext);
};

export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	// const baseURL = 'https://reelhome.herokuapp.com'
	const baseURL = 'http://localhost:5050'

	const allPosts = async () => {
		const res = await fetch(
			`${baseURL}/post/allPosts`,
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const posts = await res.json();
		console.log(res);
		setPosts(posts.posts.reverse());
		console.log(posts.posts);
		return posts.posts;
	};

	const newPost = async ({caption, videoStr}) => {
		const res = await fetch(
			`${baseURL}/post/newPost`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					videoStr: videoStr,
					caption,
				}),
			}
		);
		const data = await res.json();
		return data;
	}

	const deletePost = async (id) => {
		const res = await fetch(
			`${baseURL}/post/delete/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(res);
		setPosts(data.posts.reverse());
		console.log(posts);
		return posts;
	}

	const commentOnPost = async (postID, comment) => {
		const res = await fetch(
			`${baseURL}/post/commentOnPost/${postID}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					postID,
					comment,
				}),
			}
		);
		const data = await res.json();
		console.log(data);
		return posts;
	}

	const likePost = async (postID) => {
		const res = await fetch(
			`${baseURL}/post/like/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(data);
		return posts;
	}

	const getCommentsByPost = async (postID) => {

		const res = await fetch(
			`${baseURL}/post/getCommentsByPosts/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	}

	const getLikesDataByPost = async (postID) => {

		const res = await fetch(
			`${baseURL}/post/getLikesDataByPost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	}

	const getLikesCountByPost = async (postID) => {

		const res = await fetch(
			`${baseURL}/post/getLikeCountByPost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	}

	const unlikePost = async (postID) => {
		const res = await fetch(
			`${baseURL}/post/unlikePost/${postID}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	}

	const updateCommentOnPost = async (postID, commentID, comment) => {
		const res = await fetch(
			`${baseURL}/post/updateCommentOnPost/${postID}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					commentID,
					comment,
				}),
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	}

	const updatePost = async ({postID, videoStr, caption}) => {
		const res = await fetch(
			`${baseURL}/post/updatePost/${postID}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					videoStr,
					caption,
				}),
			}
		);
		const data = await res.json();
		console.log(data);
		setPosts(data.posts.reverse());
		return data;
	}

	const getPostsByFollowing = async () => {
		const res = await fetch(
			`${baseURL}/post/getPostsByFollowing`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
			}
		);
		const data = await res.json();
		console.log(data);
		setPosts(data.posts.reverse());
		return data;
	}

const getPostsByUser = async (userID) => {
	const res = await fetch(
		`${baseURL}/post/getPostByPosterID/${userID}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				authorization: "Bearer " + getCookie("token"),
			},
		}
	);
	const data = await res.json();
	return data;
}

	const getAllPostDataById = async (postID) => {
		const res = await fetch(
			`${baseURL}/post/getAllPostData/${postID}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				authorization: "Bearer " + getCookie("token"),
			}
		});
		const data = await res.json();
		console.log(data);
		return data;
	}

	const deleteComment = async (postID, commentID) => {
		const res = await fetch(
			`${baseURL}/post/deleteComment/${postID}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					authorization: "Bearer " + getCookie("token"),
				},
				body: JSON.stringify({
					commentID,
				}),
			}
		);
		const data = await res.json();
		console.log(data);
		return data;
	}

	useEffect(() => {
		allPosts();
	}, []);

	return (
		<PostContext.Provider value={{
			posts, setPosts,getPostsByUser, allPosts, newPost, deletePost, deleteComment, commentOnPost, likePost, getAllPostDataById, getCommentsByPost,
			getLikesDataByPost, getLikesCountByPost, unlikePost, updateCommentOnPost, updatePost, getPostsByFollowing
		}}>
			{children}
		</PostContext.Provider>
	);
};
