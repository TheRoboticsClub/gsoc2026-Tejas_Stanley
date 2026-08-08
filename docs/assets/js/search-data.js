// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/gsoc2026-Tejas_Stanley/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/";
          },
        },{id: "post-coding-period-week-9-10",
        
          title: "Coding Period Week 9-10",
        
        description: "GUI tutorial preparation and LiDAR detection exploration",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-9-10/";
          
        },
      },{id: "post-coding-period-week-8",
        
          title: "Coding Period Week 8",
        
        description: "Image segmentation GUI updates and review changes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-8/";
          
        },
      },{id: "post-coding-period-week-7",
        
          title: "Coding Period Week 7",
        
        description: "Adding LiDAR segmentation GUI support with SemanticKITTI",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-7/";
          
        },
      },{id: "post-coding-period-week-6",
        
          title: "Coding Period Week 6",
        
        description: "Extending the PerceptionMetrics GUI for image segmentation and starting LiDAR visualization",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-6/";
          
        },
      },{id: "post-coding-period-weeks-4-and-5",
        
          title: "Coding Period Weeks 4 and 5",
        
        description: "Improving segmentation evaluation with ontology translation and starting the PerceptionMetrics GUI task refactor",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-4-5/";
          
        },
      },{id: "post-coding-period-week-3",
        
          title: "Coding Period Week 3",
        
        description: "Improving PerceptionMetrics documentation and preparing the nuImages image segmentation tutorial",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-3/";
          
        },
      },{id: "post-coding-period-week-2",
        
          title: "Coding Period Week 2",
        
        description: "Implementing the SemanticKITTI dataset adapter and preparing the tutorial with MMDetection3D and PerceptionMetrics",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-2/";
          
        },
      },{id: "post-coding-period-week-1",
        
          title: "Coding Period Week 1",
        
        description: "Implementing the Cityscapes tutorial and improving the dataset adapter, exploring SemanticKITTI dataset",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/coding-period-week-1/";
          
        },
      },{id: "post-community-bonding-week-1",
        
          title: "Community Bonding Week 1",
        
        description: "Exploring PerceptionMetrics, Cityscapes, and evaluation workflows",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/community-bonding-week-1/";
          
        },
      },{id: "post-community-bonding-week-0",
        
          title: "Community Bonding Week 0",
        
        description: "Setting up the blog, meeting mentors, and exploring Cityscapes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/gsoc2026-Tejas_Stanley/blog/2026/community-bonding-week-0/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/gsoc2026-Tejas_Stanley/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/gsoc2026-Tejas_Stanley/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/gsoc2026-Tejas_Stanley/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
