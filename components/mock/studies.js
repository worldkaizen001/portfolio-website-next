const cols = {
  col1: 2,
  col2: 2,
  col3: 3,
  col4: 2,
  col5: 2,
};

export const pageData = {
  header: [
    { content: "Protocol numbers", col: cols.col1 },
    { content: "Status", col: cols.col2 },
    { content: "Description", col: cols.col3 },
    { content: "Type", col: cols.col4 },
    { content: "Created At", col: cols.col5 },
  ],
  body: [
    {
      col: [
        { content: "15T-MC-AACM", col: cols.col1 },
        { content: "Enrolling", col: cols.col2 },
        {
          content:
            "Tertiary Prevention of Head and Neck Cancer With a Dietary Intervention",
          col: cols.col3,
        },
        { content: "Treatment", col: cols.col4 },
        { content: "27 Aug 2020", col: cols.col5 },
      ],
    },
    {
      col: [
        { content: "15T-MC-AACM", col: cols.col1 },
        { content: "Enrolling", col: cols.col2 },
        {
          content:
            "Tertiary Prevention of Head and Neck Cancer With a Dietary Intervention",
          col: cols.col3,
        },
        { content: "Treatment", col: cols.col4 },
        { content: "27 Aug 2020", col: cols.col5 },
      ],
    },
  ],
};
