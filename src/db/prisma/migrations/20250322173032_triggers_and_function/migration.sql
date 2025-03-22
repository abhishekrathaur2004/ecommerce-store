-- CreateFunction
-- CREATE OR REPLACE FUNCTION update_updated_at()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     NEW.updated_at = CURRENT_TIMESTAMP;
--     RETURN NEW;
-- END;
-- $$ language 'plpgsql';

-- -- CreateTrigger
-- CREATE TRIGGER update_user_updated_at
--     BEFORE UPDATE ON "User"
--     FOR EACH ROW
--     EXECUTE FUNCTION update_updated_at();

-- CREATE TRIGGER update_post_updated_at
--     BEFORE UPDATE ON "Post"
--     FOR EACH ROW
--     EXECUTE FUNCTION update_updated_at();

-- -- Add more triggers for other tables as needed 