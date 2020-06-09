class Router<T> {
  public routeMap: Array<T>;

  constructor(array: T[]) {
    this.routeMap = array;
  }
}

export default Router
