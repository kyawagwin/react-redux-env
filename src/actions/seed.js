function getBlogs() {
  function generateLikeCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const blogs = [
        {
          id: 1,
          title: 'Yellow Pail',
          content: 'On-demand sand castle construction expertise.',
          url: '#',
          likes: generateLikeCount(),
          submitterAvatarUrl: 'images/avatars/daniel.jpg',
        },
        {
          id: 2,
          title: 'Supermajority: The Fantasy Congress League',
          content: 'Earn points when your favorite politicians pass legislation.',
          url: '#',
          likes: generateLikeCount(),
          submitterAvatarUrl: 'images/avatars/kristy.png',
        },
        {
          id: 3,
          title: 'Tinfoild: Tailored tinfoil hats',
          content: 'We already have your measurements and shipping address.',
          url: '#',
          likes: generateLikeCount(),
          submitterAvatarUrl: 'images/avatars/veronika.jpg',
        },
        {
          id: 4,
          title: 'Haught or Naught',
          content: 'High-minded or absent-minded? You decide.',
          url: '#',
          likes: generateLikeCount(),
          submitterAvatarUrl: 'images/avatars/molly.png',
        },
      ];

      return blogs;
}

const seed = {
  blogs: getBlogs()
}

export default seed;