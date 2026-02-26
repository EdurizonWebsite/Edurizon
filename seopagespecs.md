# Specification: New University Page Creation

## 1. Objective
Analyze the structure, SEO patterns, and content blocks of existing university pages within the Georgia destination folder to create a consistent new webpage for a specific university.

## 2. Context & Reference Pages
Please crawl and analyze the following URLs to understand the layout, component usage, and information hierarchy:

### Primary References:
* `/study-destinations/study-mbbs-in-georgia/bau-international-university`
* `/study-destinations/study-mbbs-in-georgia/tbilisi-state-medical-university`

### Folder Context:
* Review all other pages within `/study-destinations/study-mbbs-in-georgia/` to identify common patterns (e.g., Fee Tables, Admission Process, Eligibility, FAQ sections).

## 3. Structural Requirements
The new page must mirror the existing "Study MBBS in Georgia" sub-pages, specifically focusing on:
* **Breadcrumb Navigation:** Consistent pathing.
* **Hero Section:** Title, subtitle, and primary CTA.
* **Data Tables:** Standardized formatting for tuition fees, hostel costs, and university rankings.
* **Key Sections:** * About the University
    * Why Choose this University?
    * Eligibility Criteria
    * Admission Process/Documents Required
    * Syllabus/Duration
    * Hostel & Food Facilities
* **SEO Metadata:** Follow the naming convention for Title Tags and Meta Descriptions used in the reference pages.

## 4. New Page Details
**Target University Name:** [INSERT UNIVERSITY NAME HERE]
**Target Slug:** `/study-destinations/study-mbbs-in-[country-name-of-target-university]/[university-slug]`

---

## 5. Implementation Instructions
1. **Analyze:** Parse the reference files to extract the Markdown/HTML/React component structure.
2. **Apply Content:** Use the raw content provided by the user (below) and map it into the identified structure.
3. **Consistency Check:** Ensure the tone of voice, heading levels (H1, H2, H3), and table styling match the existing pages exactly.