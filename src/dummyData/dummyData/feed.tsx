export const feedPosts = [
  {
    userId: '1',
    title: 'New Post',
    images: [],
    description: 'New post posted here!',
    likes: 20,
    comments: [
      {
        userId: '2',
        comment: 'Nice Job',
        likes: 2,
        replies: [
          {
            userId: '1',
            comment: 'Thanks!',
            likes: 1,
            replies: [],
          },
        ],
      },
      {
        userId: '3',
        comment: "What's the purpose!",
        likes: 4,
        replies: [
          {
            userId: '1',
            comment: "You won't get it!",
            likes: 9,
            replies: [
              {
                userId: '3',
                comment: 'Try hard!',
                likes: 1,
                replies: [],
              },
            ],
          },
          {
            userId: '4',
            comment: 'Nice bro',
            likes: 3,
            replies: [
              {
                userId: '1',
                comment: 'Whose side are you on?',
                likes: 0,
                replies: [],
              },
            ],
          },
        ],
      },
    ],
    sharedBy: 200,
    time: new Date(),
  },
  {
    userId: '1',
    title: 'New Post',
    images: [],
    description: 'New post posted here!',
    likes: 20,
    comments: [
      {
        userId: '2',
        comment: 'Nice Job',
        likes: 2,
        replies: [
          {
            userId: '1',
            comment: 'Thanks!',
            likes: 1,
            replies: [],
          },
        ],
      },
      {
        userId: '3',
        comment: "What's the purpose!",
        likes: 4,
        replies: [
          {
            userId: '1',
            comment: "You won't get it!",
            likes: 9,
            replies: [
              {
                userId: '3',
                comment: 'Try hard!',
                likes: 1,
                replies: [],
              },
            ],
          },
          {
            userId: '4',
            comment: 'Nice bro',
            likes: 3,
            replies: [
              {
                userId: '1',
                comment: 'Whose side are you on?',
                likes: 0,
                replies: [],
              },
            ],
          },
        ],
      },
    ],
    sharedBy: 200,
    time: new Date(),
  },
]

export const userData = [
  {
    userId: '1',
    name: 'Ashma Garg',
    firstName: 'Ashma',
    lastName: 'Garg',
    verified: true,
    phoneNo: '3828802727',
    sex: 'female',
    profilePhoto: '',
  },
]
