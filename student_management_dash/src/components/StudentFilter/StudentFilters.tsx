"use client";

import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

interface StudentFiltersProps {
    search: string;
    course: string;
    status: string;
    score: string;

    setSearch: (value: string) => void;
    setCourse: (value: string) => void;
    setStatus: (value: string) => void;
    setScore: (value: string) => void;

    onApply: () => void;
    onReset: () => void;
}

export default function StudentFilters({
    search,
    course,
    status,
    score,
    setSearch,
    setCourse,
    setStatus,
    setScore,
    onApply,
    onReset,
}: StudentFiltersProps) {
    return (
        <Grid container spacing={2} sx={{ mb: 3 }}>

            <Grid size={{ xs: 12, md: 3 }}>
                <TextField
                    fullWidth
                    label="Search"
                    placeholder="Name or Email"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
                <FormControl fullWidth>
                    <InputLabel>Course</InputLabel>

                    <Select
                        value={course}
                        label="Course"
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="React">React</MenuItem>
                        <MenuItem value="Node.js">Node.js</MenuItem>
                        <MenuItem value="Next.js">Next.js</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
                <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>

                    <Select
                        value={status}
                        label="Status"
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">
                            Inactive
                        </MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid size={{ xs: 12, md: 2 }}>
                <FormControl fullWidth>
                    <InputLabel>Score</InputLabel>

                    <Select
                        value={score}
                        label="Score"
                        onChange={(e) =>
                            setScore(e.target.value)
                        }
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="0-50">0-50</MenuItem>
                        <MenuItem value="51-75">51-75</MenuItem>
                        <MenuItem value="76-100">
                            76-100
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid
                size={{ xs: 12, md: 3 }}
                sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                }}
            >
                <Button
                    variant="contained"
                    onClick={onApply}
                >
                    Apply Filters
                </Button>

                <Button
                    variant="outlined"
                    onClick={onReset}
                >
                    Reset
                </Button>
            </Grid>

        </Grid>
    );
}