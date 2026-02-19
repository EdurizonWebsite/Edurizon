/**
 * Utility functions for filtering student data based on search query
 * 
 * These functions provide consistent filtering logic across all pages
 * that display student tables.
 */

interface Student {
  name?: string;
  studentName?: string;
  email?: string;
  phone?: string;
  enrolledUniversity?: string[] | string;
  enrolledCountry?: string[] | string;
  [key: string]: any; // Allow additional fields
}

/**
 * Filters student data based on search query
 * 
 * Searches across:
 * - studentName/name
 * - email
 * - phone
 * - enrolledUniversity (handles both array and string)
 * - enrolledCountry (handles both array and string)
 * 
 * @param students - Array of student objects to filter
 * @param searchQuery - Search query string (will be lowercased internally)
 * @returns Filtered array of students matching the search query
 * 
 * @example
 * ```ts
 * const filtered = filterStudents(students, 'john');
 * ```
 */
export const filterStudents = (students: Student[], searchQuery: string): Student[] => {
  if (!searchQuery || !searchQuery.trim()) {
    return students;
  }

  const query = searchQuery.trim().toLowerCase();

  return students.filter((student) => {
    // Check studentName or name
    const name = student.studentName || student.name || '';
    if (name.toLowerCase().includes(query)) {
      return true;
    }

    // Check email
    const email = student.email || '';
    if (email.toLowerCase().includes(query)) {
      return true;
    }

    // Check phone
    const phone = student.phone || '';
    if (phone.toLowerCase().includes(query)) {
      return true;
    }

    // Check enrolledUniversity (can be array or string)
    const university = student.enrolledUniversity;
    if (university) {
      if (Array.isArray(university)) {
        const universityStr = university.join(' ').toLowerCase();
        if (universityStr.includes(query)) {
          return true;
        }
      } else if (typeof university === 'string') {
        if (university.toLowerCase().includes(query)) {
          return true;
        }
      }
    }

    // Check enrolledCountry (can be array or string)
    const country = student.enrolledCountry;
    if (country) {
      if (Array.isArray(country)) {
        const countryStr = country.join(' ').toLowerCase();
        if (countryStr.includes(query)) {
          return true;
        }
      } else if (typeof country === 'string') {
        if (country.toLowerCase().includes(query)) {
          return true;
        }
      }
    }

    return false;
  });
};

/**
 * Hook-like function to get filtered students (for use in useMemo)
 * 
 * @param students - Array of student objects
 * @param searchQuery - Search query string
 * @returns Filtered array of students
 */
export const useFilteredStudents = (
  students: Student[],
  searchQuery: string
): Student[] => {
  return filterStudents(students, searchQuery);
};

export type {Student}