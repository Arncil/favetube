import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                <Navbar />
                <Routes>
                    <Route path="favetube/" exact element={<Feed />} />
                    <Route path="favetube/video/:id" element={<VideoDetail />} />
                    <Route path="favetube/channel/:id" element={<ChannelDetail />} />
                    <Route path="favetube/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default App
