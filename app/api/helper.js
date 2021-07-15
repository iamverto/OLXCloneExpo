export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
}