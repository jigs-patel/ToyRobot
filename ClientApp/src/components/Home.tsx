import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Toy Robot!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
            <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
            <li><a href='https://facebook.github.io/react/'>React/TypeScript</a> for client-side code</li>
            <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            <li>Node Version:  17.0.1 </li>
            <li>NPM Version:   8.1.0</li>
            <li>Swagger ToyRobot API: <a href="/swagger/index.html">/swagger/index.html</a></li>
        </ul>
            <p>To help you get started:</p>
            <ul>
                <li>This solution can be pure - React Component and no need for - API, But i created it to show - I am Full Stack DEV.</li>
                <li>There is commented out code in - React ToyRobot.tsx component for - pure React/Typescript solution.</li>
                <li><strong>ToyRobot - component has properties - MaxRows, MaxCols - which can be changed to draw diffrent dimention table. (4x4, 8x8, 10x10)</strong></li>
                <li>This is my approch for this solution instead of - C# console app. (console apps - i think is bit boring  :)  )</li>
            </ul>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>PlayToyRobot</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
