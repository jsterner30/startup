export async function logout () {
        localStorage.setItem("userName", "")
        await fetch(`/api/auth/logout`, {
            method: 'delete',
        })
        window.location.href = '/';
}