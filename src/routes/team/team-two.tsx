import teamData from '#/components/data/team-data'
import BreadCrumb from '#/components/pages/common/breadcrumb'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/team/team-two')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
      <BreadCrumb title="Team Two" innerTitle="Team Two" />
      <TeamMain />
    </main>
  )
}

const TeamMain = () => {
  return (
    <>
      <div className="team__one bg-color-2 section-padding">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {teamData?.map((data, id) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                <div className="team__one-team-item">
                  <img src={data.image} alt="image" />
                  <div className="team__one-team-item-content">
                    <div className="member-name">
                      <span>{data.position}</span>
                      <h3>{data.name}</h3>
                    </div>
                    <div className="team__one-social-wrapper fas fa-share-alt">
                      <div className="share-links">
                        {data.social_link.map((social, id) => (
                          <Link
                            className="inner-link"
                            key={id}
                            to={social.link}
                            target={social.target}
                          >
                            {social.icon}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </div>
    </>
  )
}
