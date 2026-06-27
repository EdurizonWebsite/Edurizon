import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';

interface StaticAttributesContextType {
  countries: string[];
  universities: string[];
  currencies: string[];
  loading: boolean;
  refresh: () => Promise<void>;
  addCountry: (name: string) => Promise<void>;
  removeCountry: (name: string) => Promise<void>;
  addUniversity: (name: string) => Promise<void>;
  removeUniversity: (name: string) => Promise<void>;
  addCurrency: (name: string) => Promise<void>;
  removeCurrency: (name: string) => Promise<void>;
}

const StaticAttributesContext = createContext<StaticAttributesContextType | undefined>(undefined);

function getAdminToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('adminToken');
}

function authHeader() {
  const token = getAdminToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export const StaticAttributesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [universities, setUniversities] = useState<string[]>([]);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Public refresh — called by admin pages on mount so data is always up to date
  const refresh = useCallback(async () => {
    const token = getAdminToken();
    if (!token) return;
    setLoading(true);
    try {
      const headers = authHeader();
      const [countriesRes, universitiesRes, currenciesRes] = await Promise.all([
        axios.get(`${baseUrl}/api/static-attributes/countries`, { headers }),
        axios.get(`${baseUrl}/api/static-attributes/universities`, { headers }),
        axios.get(`${baseUrl}/api/static-attributes/currencies`, { headers }),
      ]);
      setCountries(countriesRes.data.items || []);
      setUniversities(universitiesRes.data.items || []);
      setCurrencies(currenciesRes.data.items || []);
    } catch {
      // Silent failure — components fall back to empty arrays / text inputs
    } finally {
      setLoading(false);
    }
  }, []);

  // Attempt a silent load on mount; succeeds when the admin token already exists
  // (e.g. user refreshes while already on an admin page)
  useEffect(() => {
    refresh();
  }, [refresh]);

  const addCountry = useCallback(async (name: string) => {
    const res = await axios.post(
      `${baseUrl}/api/static-attributes/countries`,
      { name },
      { headers: authHeader() }
    );
    setCountries(res.data.items || []);
  }, []);

  const removeCountry = useCallback(async (name: string) => {
    const res = await axios.delete(
      `${baseUrl}/api/static-attributes/countries/${encodeURIComponent(name)}`,
      { headers: authHeader() }
    );
    setCountries(res.data.items || []);
  }, []);

  const addUniversity = useCallback(async (name: string) => {
    const res = await axios.post(
      `${baseUrl}/api/static-attributes/universities`,
      { name },
      { headers: authHeader() }
    );
    setUniversities(res.data.items || []);
  }, []);

  const removeUniversity = useCallback(async (name: string) => {
    const res = await axios.delete(
      `${baseUrl}/api/static-attributes/universities/${encodeURIComponent(name)}`,
      { headers: authHeader() }
    );
    setUniversities(res.data.items || []);
  }, []);

  const addCurrency = useCallback(async (name: string) => {
    const res = await axios.post(
      `${baseUrl}/api/static-attributes/currencies`,
      { name },
      { headers: authHeader() }
    );
    setCurrencies(res.data.items || []);
  }, []);

  const removeCurrency = useCallback(async (name: string) => {
    const res = await axios.delete(
      `${baseUrl}/api/static-attributes/currencies/${encodeURIComponent(name)}`,
      { headers: authHeader() }
    );
    setCurrencies(res.data.items || []);
  }, []);

  return (
    <StaticAttributesContext.Provider
      value={{
        countries,
        universities,
        currencies,
        loading,
        refresh,
        addCountry,
        removeCountry,
        addUniversity,
        removeUniversity,
        addCurrency,
        removeCurrency,
      }}
    >
      {children}
    </StaticAttributesContext.Provider>
  );
};

export const useStaticAttributes = (): StaticAttributesContextType => {
  const ctx = useContext(StaticAttributesContext);
  if (!ctx) throw new Error('useStaticAttributes must be used within StaticAttributesProvider');
  return ctx;
};
