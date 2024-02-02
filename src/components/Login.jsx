export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
