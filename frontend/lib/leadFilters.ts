export interface LeadFilterCriteria {
  name?: string;
  country?: string;
  course?: string;
  status?: string;
  counsellor?: string;
  source?: string;
  city?: string;
  state?: string;
}

const normalize = (value: unknown) => String(value ?? '').trim().toLowerCase();

export const applyLeadFilters = <T extends Record<string, any>>(
  leads: T[],
  criteria: LeadFilterCriteria
) => {
  return leads.filter((lead) => {
    if (criteria.name && !normalize(lead.name).includes(normalize(criteria.name))) return false;
    if (criteria.country && normalize(lead.countryInterested) !== normalize(criteria.country)) return false;
    if (criteria.course && normalize(lead.courseName) !== normalize(criteria.course)) return false;
    if (criteria.status && lead.leadType !== criteria.status) return false;

    if (criteria.counsellor) {
      const assignedCounsellorId =
        typeof lead.assignedCounsellor === 'object'
          ? lead.assignedCounsellor?._id
          : lead.assignedCounsellor;
      if (assignedCounsellorId !== criteria.counsellor) return false;
    }

    if (criteria.source && !normalize(lead.source || 'Website').includes(normalize(criteria.source))) return false;
    if (criteria.city && !normalize(lead.city).includes(normalize(criteria.city))) return false;
    if (criteria.state && !normalize(lead.state).includes(normalize(criteria.state))) return false;

    return true;
  });
};
