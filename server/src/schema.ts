import gql from 'graphql-tag';

export const typeDefs = gql`
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        "The track's ID"
        id: ID!
        "The track's title"
        title: String!
        "An object representing the author of the track"
        author: Author!
        "The track's thumbnail image url"
        thumbnail: String
        "The estimated amount of time to complete the track, in minutes"
        length: Int
        "The number of modules contained in the track"
        modulesCount: Int
    }

    "Author of a Track and/or Module"
    type Author {
        "The author's ID"
        id: ID!
        "The author's name, first and last"
        name: String!
        "The author's profile picture url"
        photo: String
    }
`;