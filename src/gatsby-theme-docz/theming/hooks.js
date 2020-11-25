import { useState, useCallback } from 'react';
import qs from 'query-string';

function goToQuery(value) {
  if (typeof window !== 'undefined') {
    const { protocol, host, pathname } = window.location;
    const newurl = protocol + '//' + host + pathname + value;
    window.history.pushState({ path: newurl }, '', newurl);
  }
}

function parseQueryString(query) {
  if (query) {
    query = query.replace(/^\?+/, '');
    return JSON.parse('{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}', (key, value) => {
      return key === '' ? value : decodeURIComponent(value);
    });
  }
  return {};
}

function getQueryValue(key, query) {
  const values = qs.parse(query);
  return values[key];
}

function getQueryString(key, value, query) {
  if (typeof window === 'undefined') {
    return '';
  }
  const values = { ...parseQueryString(query || window.location.search), [key]: value };
  return (
    `?` +
    Object.keys(values)
      .reduce((acc, key) => {
        const value = values[key];
        if (value) acc += `&${key}=${encodeURIComponent(value)}`;
        return acc;
      }, '')
      .replace(/^&/, '')
  );
}

function setQuery(key, value, query) {
  if (typeof window !== 'undefined') {
    goToQuery(getQueryString(key, value, query || window.location.search));
  }
}

export function useQuery(key, initialValue) {
  const [value, setValue] = useState(getQueryValue(key) || initialValue);
  const onSetValue = useCallback(
    (newValue) => {
      setValue(newValue);
      setQuery(key, newValue);
    },
    [key],
  );

  return [value, onSetValue];
}
