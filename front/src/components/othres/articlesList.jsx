import { Box, Card, Typography, Chip, AspectRatio } from '@mui/joy';

const ArticleCard = ({ title, date, author, description, tags, image }) => (
  <Card
    variant="soft"
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: 2,
      // bgcolor: 'transparent',

      // borderBottom: '1px solid',
      // borderColor: 'rgba(255, 255, 255, 0.1)',
      '&:hover': {
        bgcolor: 'rgba(255, 255, 255, 0.02)',
        cursor: 'pointer',
      },
    }}
  >
    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
        <Typography level="body-sm" sx={{ color: 'white' }}>
          {author}
        </Typography>
        <Typography level="body-sm" sx={{ color: 'neutral.400' }}>
          on {date}
        </Typography>
      </Box>

      <Typography
        level="h4"
        sx={{
          color: 'white',
          mb: 1,
          fontSize: 'xl',
          fontWeight: 'bold',
        }}
      >
        {title}
      </Typography>

      <Typography
        level="body-sm"
        sx={{
          color: 'neutral.400',
          mb: 2,
        }}
      >
        {description}
      </Typography>

      <Box sx={{ display: 'flex', gap: 1 }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            size="sm"
            variant="soft"
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.15)',
              },
            }}
          >
            {tag.toUpperCase()}
          </Chip>
        ))}
      </Box>
    </Box>

    <AspectRatio
      ratio="1"
      sx={{
        width: 150,
        borderRadius: 'md',
        overflow: 'hidden',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          objectFit: 'cover',
        }}
      />
    </AspectRatio>
  </Card>
);

const ArticlesList = () => {
  const articles = [
    {
      author: 'Ethan Caldwell',
      date: 'September 29, 2024',
      title: 'The Future of Work: Tech and Remote Trends',
      description: 'Find out why 2024 is predicted to be a pivotal year for sports...',
      tags: ['sport', 'travel'],
      image: 'https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0041-832x468.webp'
    },
    {
      author: 'Ethan Caldwell',
      date: 'September 27, 2024',
      title: 'Remote Work Trends in the Digital Age',
      description: 'Discover the cutting-edge tech gadgets making travel smarter and more...',
      tags: ['news', 'trends'],
      image: 'https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0040-1248x703.webp'
    },
    {
      author: 'Ethan Caldwell',
      date: 'September 25, 2024',
      title: 'Business Travel Tools for the Digital Age',
      description: 'Learn how startups are leveraging data to fuel growth and scale in...',
      tags: ['business'],
      image: 'https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0039-1248x702.webp'
    }
  ];

  return (
    <Box
      sx={{
        // bgcolor: '#1a1a1a',

        // p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,

      }}
    >
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </Box>
  );
};

export default ArticlesList;