export const calculateSkipAndTake = (page?: number, limit?: number) => {
    page = (!page || page < 1) ? 1 : page;
    limit = (!limit || limit < 1) ? 10 : limit;

    const skip = (page - 1) * limit;
    return { skip, take: limit };
}

export const getPaginatedData = (totalCount: number, page?: number, limit?: number) => {
    page = (!page || page < 1) ? 1 : page;
    limit = (!limit || limit < 1) ? 10 : limit;

    const totalPages = Math.ceil(totalCount / limit);
    return { totalPages, currentPage: page, totalRecords: totalCount };
}