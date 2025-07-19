import React from "react";
import "./GithubRepoCard.scss";
import {Fade} from "react-reveal";
import {formatFileSizeDisplay} from "../../utils";

export default function GithubRepoCard({repo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
          key={repo.node.id}
          onClick={() => openUrlInNewTab(repo.node.url, repo.node.name)}
        >
          <div className="repo-name-div">
            <p className="repo-name">{repo.node.name}</p>
          </div>
          <p className="repo-description">{repo.node.description}</p>
          <div className="repo-stats">
            <div className="repo-left-stat">
              {repo.node.primaryLanguage !== null && (
                <span>
                  <div
                    className="language-color"
                    style={{backgroundColor: repo.node.primaryLanguage.color}}
                  ></div>
                  <p>{repo.node.primaryLanguage.name}</p>
                </span>
              )}
            </div>
            <div className="repo-right-stat">
              <p>{formatFileSizeDisplay(repo.node.diskUsage)}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
