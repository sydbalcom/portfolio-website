import { useState } from 'react'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardActionArea } from '@mui/material';
import { Typography } from '@mui/material'
import { Chip } from '@mui/material'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  // client: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  console.log(coverImage)
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card variant='outlined'>
      <CardActionArea href={`/posts/${slug}`}>
        <CardMedia 
          sx={{ width: 1, height: 300 }}
          title={title}
          image={`${coverImage}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Chip label={date} />
          <Typography variant="body2" color="text.secondary">
            {excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostPreview
