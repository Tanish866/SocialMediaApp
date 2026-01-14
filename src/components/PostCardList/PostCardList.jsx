import PostCard from "../PostCard";

let arr = [
    {
        "id": "6933f6789088fe0b10715808",
        "image": "",
        "likes": 0,
        "tags": [],
        "text": "fdfdsfsd",
        "publishDate": "2025-12-06T09:25:12.681Z",
        "updatedDate": "2025-12-06T09:25:12.681Z",
        "owner": {
            "id": "60d0fe4f5311236168a10a0d",
            "title": "mr",
            "firstName": "Lyam",
            "lastName": "Morin",
            "picture": "https://randomuser.me/api/portraits/med/men/95.jpg"
        }
    },
    {
        "id": "68fa88bbf3d4ac1e4b73510d",
        "image": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        "likes": 0,
        "tags": [
            "coding",
            "qa",
            "automation"
        ],
        "text": "Exploring the beauty of clean code and automation.",
        "publishDate": "2025-10-23T19:57:47.379Z",
        "updatedDate": "2025-10-23T19:57:47.379Z",
        "owner": {
            "id": "68fa87d7f3d4ac1a3c734a7b",
            "title": "mr",
            "firstName": "AldyUpdated",
            "lastName": "HeryanaUpdated",
            "picture": "https://randomuser.me/api/portraits/med/men/12.jpg"
        }
    }
];

function PostCardList(){
    return (
        arr.map((post) => <PostCard key={post.id}/>)
    );
}
export default PostCardList;

