export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};

export const routerUrl = ({ resource, id, action }) => {
  const parseResource = resource ? `/${resource}` : '/';
  const parseId = id ? '/:id' : '';
  const parseAction = action ? `/${action}` : '';
  const routerUrl = parseResource + parseId + parseAction;
  return routerUrl;
};
