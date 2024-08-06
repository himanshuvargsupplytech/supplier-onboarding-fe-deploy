import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  MenuItem,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ShowDataGrid from "../common_components/ShowDataGrid";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [results, setResults] = useState([]);
  const [isClick, setClick] = useState(false);
  const [error, setErrors] = useState(null);
  const [query, setQuery] = useState();
 

  const navigate = useNavigate();
  const location = useLocation();


  console.log("results fetch from backend",results);

  useEffect(() => {
    setCities(["Nashik", "Mumbai", "Pune"]);
    setCategories(["Software", "Hardware", "Electronics"]);
    setSubcategories({
      Software: ["Software Development", "QA Testing", "Project Management"],
      Hardware: ["Processors", "Memory", "Storage Devices"],
      Electronics: ["Mobile Phones", "Computers", "Cameras"],
    });
  }, []);

  useEffect(() => {
    let searchTerms = [];
    if (city) searchTerms.push(city);
    if (category) searchTerms.push(category);
    if (subcategory) searchTerms.push(subcategory);

    setSearchTerm(searchTerms.join(" / "));
  }, [city, category, subcategory]);

  useEffect(() => {
    // Update URL with query parameters or  Using Query String
    const queryParams = new URLSearchParams();
    console.log("queryPrams", queryParams);

    if (city) queryParams.set("city", city);
    if (category) queryParams.set("category", category);
    if (subcategory) queryParams.set("subcategory", subcategory);

    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  }, [city, category, subcategory, navigate, location.pathname]);

  console.log("location object", location);

  const fetchResults = async () => {
    try {
      const response = await axios.get("/api/v1/getSuppliers", {
        params: {
          city,
          category,
          subcategory,
        },
      });
      setResults(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrors("No suppliers found matching your criteria");
        setResults([]);
        toast.error("No suppliers found matching your criteria", {
          transition: Bounce,
        });
      } else {
        setErrors("There was an error fetching the search results!");
      }
    }
  };

  const notify = () => {
    toast.error("error please select aleast one parameter!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleClearAll = () => {
    setCity("");
    setCategory("");
    setSubcategory("");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const handleSearch = () => {
    {
      searchTerm.length > 0 ? fetchResults() : notify();
    }
  };
 

  const setUsersSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="500px"
        mb={2}
        mt={3}
      >
        <TextField
          label="Search"
          value={searchTerm}
          variant="outlined"
          type="text"
          fullWidth
          name="user-search"
          inputProps={{ readOnly: true }}
          onChange={setUsersSearch}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Button
        onClick={handleClearAll}
        variant="contained"
        color="secondary"
        sx={{ mb: 2 }}
      >
        Clear All
      </Button>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="500px"
        mb={2}
      >
        <TextField
          select
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        >
          <MenuItem value="">Clear</MenuItem>
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="500px"
        mb={2}
      >
        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        >
          <MenuItem value="">Clear</MenuItem>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {category && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="500px"
          mb={2}
        >
          <TextField
            select
            label="Subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          >
            <MenuItem value="">Clear</MenuItem>
            {(subcategories[category] || []).map((sub, index) => (
              <MenuItem key={index} value={sub}>
                {sub}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      )}
    

      <ShowDataGrid getRowId={(result)=>result._id} data={results}/>

      <Button onClick={navigateToHome} variant="contained">
        Home
      </Button>

      <ToastContainer />
    </Box>
  );
};

export default Search;
