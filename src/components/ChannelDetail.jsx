import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{ background: 'linear-gradient(180deg, hsl(254, 50%, 50%), hsl(276, 50%, 50%))', zIndex: 10, height: 300 }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display="flex" p="2" justifyContent='center' width='100vw'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
