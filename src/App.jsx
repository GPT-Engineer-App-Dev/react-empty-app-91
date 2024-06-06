import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Flex, Box } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Flex as="nav" p={4} bg="gray.100" justifyContent="space-between">
        <Box>
          <Button as="a" href="/" variant="link" mr={4}>Home</Button>
          <Button as="a" href="/login" variant="link">Login</Button>
        </Box>
        {session && <Button onClick={logout} variant="link">Logout</Button>}
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;